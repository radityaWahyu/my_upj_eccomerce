<?php

use App\Models\Shop;
use App\Models\User;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignIdFor(User::class)->constrained()->restrictOnDelete();
            $table->foreignIdFor(Shop::class)->constrained()->restrictOnDelete();
            $table->string('transaction_code', 20);
            $table->enum('status', ['pesan', 'proses', 'selesai', 'dibayar'])->default('pesan');
            $table->integer('total');
            $table->dateTime('finisihed_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
