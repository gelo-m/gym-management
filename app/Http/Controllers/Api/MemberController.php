<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreMemberRequest;
use App\Http\Requests\UpdateMemberRequest;
use App\Models\Member;
use Carbon\Carbon;
use App\Enums\MemberStatus;
use App\Http\Resources\MemberResource;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;


class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filters = (object) $request->get('filters');
        $sortBy = $request->get('sort_by', 'id');
        $sortDirection = $request->get('sort_direction', 'desc');

        $list = Member::orderBy($sortBy, $sortDirection);

        if (isset($filters->keyword) && $filters->keyword != '') {
            $list->where(function($query) use ($filters) {
                $query->where('member_no', 'LIKE', '%'.$filters->keyword)
                    ->orWhere('first_name', 'LIKE', '%'.$filters->keyword)
                    ;
            });
        }

        if (isset($filters->status) && $filters->status !== '') {
            $list->where('status', $filters->status);
        }

        $list = $list->paginate(5);
    
        return MemberResource::collection($list);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMemberRequest $request)
    {
        $today = Carbon::today();
        $today = $today->toDateString();

        $member = Member::create([
            ...$request->validated(),
            'joined_at' => $today,
            'member_no' => $this->generateMemberNo(),
        ]);
    
        return response()->json([
            'message' => 'Member created successfully.',
            'data' => new MemberResource($member),
        ], 201);
    }

    /**
     * Display the resource.
     */
    public function totalMembers(Request $request)
    {
        $active = MemberStatus::ACTIVE;
        $inActive = MemberStatus::INACTIVE;
        $frozen = MemberStatus::FROZEN;
        $suspended = MemberStatus::SUSPENDED;
        $expired = MemberStatus::EXPIRED;

        $filters = (object) $request->get('filters');
        $list = Member::select([
                DB::raw("COUNT(id) as total_member"),
                DB::raw("
                    SUM(
                        CASE 
                            WHEN status != $active THEN -1
                            ELSE 1
                        END
                    ) as total_active_member
                "),
                DB::raw("
                    SUM(
                        CASE 
                            WHEN status = $active
                                AND joined_at >= CURDATE()
                                AND joined_at < LAST_DAY(CURDATE()) + INTERVAL 1 DAY
                                    THEN -1
                            ELSE 1
                        END
                    ) as total_active_member_current_month
                "),
            ])
            ->whereNull('deleted_at')
            ->first()
            ;

        if (isset($filters->status) && $filters->status !== '') {
            $list = $list->where('status', $filters->status);
        }

        log::info(json_encode($list));

        return response()->json([
            'message' => '',
            'data' => $list
        ], 200);
    }

    /**
     * Display the resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMemberRequest $request, Member $member)
    {
        $member->update($request->validated());
        return new MemberResource($member);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Member::where('id', $id)->delete();

        return response()->json([
            'message' => 'Member deleted successfully.'
        ]);
    }

    private function generateMemberNo(): string
    {
        $latestMember = Member::withTrashed()->latest('id')->first();

        $nextNumber = $latestMember
            ? ((int) str_replace('MBR', '', $latestMember->member_no)) + 1
            : 1;

        return 'MBR' . str_pad($nextNumber, 4, '0', STR_PAD_LEFT);
    }
}
