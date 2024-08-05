<?php

use App\Models\Shop;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->uuid()->primary();
            $table->string('name', 100);
            $table->enum('gender', ['l', 'p']);
            $table->string('address')->nullable();
            $table->string('phone_numbers', 20)->nullable();
            $table->string('wa_numbers', 20);
            $table->foreignIdFor(Shop::class)->constrained()->restrictOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
