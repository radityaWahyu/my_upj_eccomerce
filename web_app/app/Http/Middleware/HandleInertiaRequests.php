<?php

namespace App\Http\Middleware;

use App\Models\Setting;
use Inertia\Middleware;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\LoginResource;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $settingData = [];
        $settings = Setting::query()->get();
        foreach ($settings as $setting) {
            $name = Str::replace(' ', '_', Str::lower($setting->name));
            $settingData += [$name => $setting->data];
        }

        return array_merge(
            parent::share($request),
            [
                'auth' => Auth::check() ? [
                    'admin' => new LoginResource($request->user()),
                ] : null,
                'csrf_token' => csrf_token(),
                'flash' => [
                    'error' => fn() => $request->session()->get('error'),
                    'success' => fn() => $request->session()->get('success'),
                ],
                'settings' => fn() => $settingData
            ]
        );
    }
}
