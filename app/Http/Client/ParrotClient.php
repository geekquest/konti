<?php
namespace App\Http\Client;

class ParrotClient
{
    private $greypotBaseURL = "https://parrot.nndi.cloud/";

    private $reportStoreDirectory = null;

    public function __construct($reportStoreDirectory = 'data')
    {
        $this->reportStoreDirectory = $reportStoreDirectory;
    }

    public function generate($wordTemplateFile, $dataFile) 
    {
        $response = Http::withUrlParameters([
                'endpoint' => $this->greypotBaseURL,
                'reportId' => uuid(),
            ])->attach([
                'wordFile', $wordTemplateFile, 'wordFile',
                'excelFile', $dataFile, 'dataFile',
            ])
            ->post('{+endpoint}/generate/pdf/{reportId}', []);

        if ($response->ok()) {
            $fileDataBase64 = $response->json('data');
            
            return $fileDataBase64; // for now just return the data
        }
    }
}