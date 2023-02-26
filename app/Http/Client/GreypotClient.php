<?php 

namespace App\Http\Client;

use Illuminate\Support\Facades\Http;

class GreypotClient 
{
    private $greypotBaseURL = "https://greypot-studio.fly.dev/_studio";

    private $reportStoreDirectory = null;

    public function __construct($reportStoreDirectory = 'data')
    {
        $this->reportStoreDirectory = $reportStoreDirectory;
    }

    public function generatePDF($template, $data) 
    {
        $response = Http::withUrlParameters([
            'endpoint' => $this->greypotBaseURL,
            'reportId' => uniqid(),
        ])->post('{+endpoint}/generate/pdf/{reportId}', [
            'Name' => 'reportId',
            'Template' => $template,
            'Data' => $data,
        ], [
            'Content-Type' => 'application/json'
        ]);

        if ($response->ok()) {
            $fileDataBase64 = $response->json('data');
            return base64_decode($fileDataBase64);
        }
        throw new \Exception(sprintf('failed to generate report from template=%s got response=%s', $template, $response->body() ));
    }

    public function generateBulkPDF($template, $entries = [])
    {
        // TODO: implement the bulk endpoint here
    }
}