<?php 
    header("Access-Control-Allow-Origin: *");
    header('Content-Type: application/json');

    // $request_uri = $_SERVER['REQUEST_URI'];
    $request_uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);


    if ($request_uri == '/api/leagues') {
        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.football-data.org/v4/competitions/",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
            "X-Auth-Token: c95bd5539de042e495ccc8f22e6684b6"
        ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);
        
        $response = json_decode($response, true);
        $all=[];
        foreach($response['competitions'] as $competition){
            $all[]=[
                'id' => $competition['id'],
                'name' => $competition['name']
            ];
        }

        echo json_encode($all);
    } 

    else if($request_uri == '/api/teams'){
        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => "http://api.football-data.org/v4/teams?limit=500",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
            "X-Auth-Token: c95bd5539de042e495ccc8f22e6684b6"
        ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);
        
        $response = json_decode($response, true);
        $all=[];
        foreach($response['teams'] as $team){
            if($team['shortName'] != NULL){
                $all[]=[
                    'id' => $team['id'],
                    'name' => $team['shortName']
                ];
            }

        }
        echo json_encode($all); 
    }

    else if($request_uri == "/api/specific/teams"){
        
        $curl = curl_init();

        $id = $_GET['id'] ?? null;
        

        if (!$id) {
            http_response_code(400);
            echo json_encode(['error' => 'Selecione um campeonato']);
            exit();
        }

        curl_setopt_array($curl, array(
        CURLOPT_URL => "http://api.football-data.org/v4/competitions/{$id}/teams",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
            "X-Auth-Token: c95bd5539de042e495ccc8f22e6684b6"
        ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);
        
        $response = json_decode($response, true);
        $all=[];
        foreach($response['teams'] as $team){
            if($team['shortName'] != NULL){
                $all[]=[
                    'id' => $team['id'],
                    'name' => $team['shortName']
                ];
            }

        }
        echo json_encode($all); 
        
    }

    else if ($request_uri == '/api/get-matches-by-league'){
        
        $today = new DateTime();

        $start = clone $today; 
        $start = $start->modify('-5 days')->format('Y-m-d'); 
        
        $final = clone $today; 
        $final = $final->modify('+5 days')->format('Y-m-d'); 
                
        $curl = curl_init();

        $id = $_GET['id'] ?? null;
        

        if (!$id) {
            http_response_code(400);
            echo json_encode(['error' => 'Selecione um campeonato']);
            exit();
        }

        curl_setopt_array($curl, array(
        CURLOPT_URL => "http://api.football-data.org/v4/matches?competitions={$id}&&dateFrom={$start}&&dateTo={$final}",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
            "X-Auth-Token: c95bd5539de042e495ccc8f22e6684b6"
        ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);
        
        $response = json_decode($response, true);
        $all=[];
        foreach($response['matches'] as $game){
            $utcDate = $game['utcDate'];
            $dateTime = new DateTime($utcDate);
            $formattedDate = $dateTime->format('d-m-Y H:i:s');
            $all[]=[
                "homeTeam" => $game['homeTeam'],
                "awayTeam" => $game['awayTeam'],
                "status" => $game['status'],
                "score" => $game['score']['fullTime'],
                "competition" =>  $game['competition'],
                "date" => $formattedDate
            ];
        }
        echo json_encode($all);
        
    }

    else if($request_uri == '/api/get-matches-by-team'){
        $curl = curl_init();

        $id = $_GET['id'] ?? null;
        

        if (!$id) {
            http_response_code(400);
            echo json_encode(['error' => 'Selecione uma equipe']);
            exit();
        }

        curl_setopt_array($curl, array(
        CURLOPT_URL => "http://api.football-data.org/v4/teams/{$id}/matches?limit=25",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
            "X-Auth-Token: c95bd5539de042e495ccc8f22e6684b6"
        ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);
        
        $response = json_decode($response, true);
        $all=[];
        foreach($response['matches'] as $game){
            $utcDate = $game['utcDate'];
            $dateTime = new DateTime($utcDate);
            $formattedDate = $dateTime->format('d-m-Y H:i:s');
            $all[]=[
                "homeTeam" => $game['homeTeam'],
                "awayTeam" => $game['awayTeam'],
                "status" => $game['status'],
                "score" => $game['score']['fullTime'],
                "competition" =>  $game['competition'],
                "date" => $formattedDate
            ];
        }

        echo json_encode($all);
        
    }