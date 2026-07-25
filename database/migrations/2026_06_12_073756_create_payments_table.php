<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Enums\PaymentGateway;
use App\Enums\PaymentStatus;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->string('reference_no')->unique();
            $table->foreignId('member_id')->constrained()->cascadeOnDelete();
            $table->foreignId('subscription_id')->nullable()->constrained()->nullOnDelete();
            $table->decimal('amount', 12, 2);
            $table->tinyInteger('payment_method');
            $table->tinyInteger('gateway')->default(PaymentGateway::MANUAL);
            $table->string('gateway_transaction_id')->nullable();
            $table->timestamp('payment_date');
            $table->tinyInteger('status')->default(PaymentStatus::PENDING);
            $table->timestamps();
        
            $table->index('reference_no');
            $table->index('member_id');
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
