<?php

namespace App\Observers;

use App\Models\ProductImage;
use App\Traits\Image;

class ProductImageObserver
{
    use Image;
    /**
     * Handle the ProductImage "created" event.
     */
    public function created(ProductImage $productImage): void
    {
        //
    }

    /**
     * Handle the ProductImage "updated" event.
     */
    public function updated(ProductImage $productImage): void
    {
        //
    }

    /**
     * Handle the ProductImage "deleted" event.
     */
    public function deleted(ProductImage $productImage): void
    {
        $this->deleteImage($productImage->image_url);
    }

    /**
     * Handle the ProductImage "restored" event.
     */
    public function restored(ProductImage $productImage): void
    {
        //
    }

    /**
     * Handle the ProductImage "force deleted" event.
     */
    public function forceDeleted(ProductImage $productImage): void
    {
        //
    }
}
