<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreMemberRequest;
use App\Models\Member;
use Carbon\Carbon;
use App\Enums\MemberStatus;
use App\Http\Resources\MemberResource;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $members = Member::latest()->paginate(10);
    
        return MemberResource::collection($members);
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
            'status' => MemberStatus::ACTIVE,
            'member_no' => $this->generateMemberNo(),
        ]);
    
        return response()->json([
            'message' => 'Member created successfully.',
            'data' => new MemberResource($member),
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    private function generateMemberNo(): string
    {
        $latestMember = Member::latest('id')->first();

        $nextNumber = $latestMember
            ? ((int) str_replace('MBR', '', $latestMember->member_no)) + 1
            : 1;

        return 'MBR' . str_pad($nextNumber, 4, '0', STR_PAD_LEFT);
    }
}
