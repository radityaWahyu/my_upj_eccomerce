<?php

namespace App\Observers;

use App\Models\Banner;
use App\Traits\Image;

class BannerObserver
{
    use Image;
    /**
     * Handle the Banner "created" event.
     */
    public function created(Banner $banner): void
    {
        //
    }

    /**
     * Handle the Banner "updated" event.
     */
    public function updated(Banner $banner): void
    {
        //
    }

    /**
     * Handle the Banner "deleted" event.
     */
    public function deleted(Banner $banner): void
    {
        $this->deleteImage($banner->image);
    }

    /**
     * Handle the Banner "restored" event.
     */
    public function restored(Banner $banner): void
    {
        //
    }

    /**
     * Handle the Banner "force deleted" event.
     */
    public function forceDeleted(Banner $banner): void
    {
        //
    }
}
