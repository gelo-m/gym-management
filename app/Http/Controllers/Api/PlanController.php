<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StorePlansRequest;
use App\Http\Requests\UpdatePlansRequest;
use App\Models\Plan;
use Carbon\Carbon;
use App\Http\Resources\PlanResource;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class PlanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filters = (object) $request->get('filters');
        $sortBy = $request->get('sort_by', 'id');
        $sortDirection = $request->get('sort_direction', 'desc');

        $list = Plan::orderBy($sortBy, $sortDirection);

        if (isset($filters->keyword) && $filters->keyword != '') {
            $list->where(function($query) use ($filters) {
                $query->where('code', 'LIKE', '%'.$filters->keyword)
                    ->orWhere('name', 'LIKE', '%'.$filters->keyword)
                    ;
            });
        }

        if (isset($filters->status) && $filters->status !== '') {
            $list->where('status', $filters->status);
        }

        $list = $list->paginate(5);
    
        return PlanResource::collection($list);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePlansRequest $request)
    {
        // $today = Carbon::today();
        // $today = $today->toDateString();

        // $member = Member::create([
        //     ...$request->validated(),
        //     'joined_at' => $today,
        //     'member_no' => $this->generateMemberNo(),
        // ]);
    
        // return response()->json([
        //     'message' => 'Member created successfully.',
        //     'data' => new PlanResource($member),
        // ], 201);
    }

    /**
     * Display the resource.
     */
    public function totalMembers(Request $request)
    {
    //     $active = MemberStatus::ACTIVE;
    //     $inActive = MemberStatus::INACTIVE;
    //     $frozen = MemberStatus::FROZEN;
    //     $suspended = MemberStatus::SUSPENDED;
    //     $expired = MemberStatus::EXPIRED;

    //     $filters = (object) $request->get('filters');
    //     $list = Member::select([
    //             DB::raw("CAST(COUNT(id) AS CHAR) as all_member"),
    //             DB::raw("
    //                 SUM(
    //                     CASE 
    //                         WHEN status != $active THEN -1
    //                         ELSE 1
    //                     END
    //                 ) as active_member
    //             "),
    //             DB::raw("
    //                 SUM(
    //                     CASE 
    //                         WHEN status = $active
    //                             AND joined_at >= CURDATE()
    //                             AND joined_at < LAST_DAY(CURDATE()) + INTERVAL 1 DAY
    //                                 THEN -1
    //                         ELSE 1
    //                     END
    //                 ) as new_this_month
    //             "),
    //         ])
    //         ->whereNull('deleted_at')
    //         ->first()
    //         ;

    //     if (isset($filters->status) && $filters->status !== '') {
    //         $list = $list->where('status', $filters->status);
    //     }

    //     return response()->json([
    //         'message' => '',
    //         'data' => $list
    //     ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePlansRequest $request, Plans $member)
    {
        // $member->update($request->validated());
        // return new PlanResource($member);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Plan::where('id', $id)->delete();

        // return response()->json([
        //     'message' => 'Member deleted successfully.'
        // ]);
    }
}