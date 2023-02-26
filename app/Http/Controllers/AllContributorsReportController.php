<?php
namespace App\Http\Controllers;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

use App\Http\Client\GreypotClient;

class AllContributorsReportController extends BaseController
{

    private $greypot;
    
    public function __construct(GreypotClient $greypot)
    {
        $this->greypot = $greypot;
    }

    public function download()
    {
        $data = [
            'contributors' => [
                [
                    'name' => 'XXXXX',
                    'phone' => 'XXXXX',
                    'email' => 'XXXXX',
                    'amount' => 'XXXXX',
                    'date' => 'XXXXX',
                ]
            ]
        ];

        $template = file_get_contents(resource_path('report-template/contributors.html'));
        
        $reportData = $this->greypot->generatePDF($template, $data);

        return response()->streamDownload(function() use ($reportData) {
                echo $reportData;
            }, 'report.pdf');
    }    
}