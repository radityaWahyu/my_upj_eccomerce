<?php

use App\Models\Category;
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
        Schema::create('products', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->enum('type', ['produk', 'jasa']);
            $table->integer('stock')->nullable();
            $table->integer('price')->default(0);
            $table->string('slug');
            $table->boolean('affect_stock')->default(false);
            $table->foreignIdFor(Category::class)->constrained()->noActionOnDelete();
            $table->foreignIdFor(Shop::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(User::class)->constrained()->noActionOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
