<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Shop>
 */
class ShopFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = $this->faker->sentence(4);
        $slug = Str::slug($name);
        $image  = $this->faker->imageUrl(640, 480, 'schools', true, 'vocational');

        return [
            'name' => $name,
            'slug' => $slug,
            'image' => $image
        ];
    }
}
