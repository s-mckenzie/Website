<?php
    function connect ($database = "customer")
    {
        static $old_db, $dbh;
        
        # close previous connection if we are switching databases;
        if (isset($dbh) && $old_db != $database) {
            try { $dbh->close();}
            catch (Exception $e) {$dbh = "";}
        }
        
        # set info
        $servername = getenv("IP");
        $username = getenv("C9_USER");
        $password = "";
        $database = $database;
        $dbport = "3306";

        $dbh = new mysqli("p:".$servername, $username, $password, $database, $dbport);
        $old_db = $database;

        # return connection object
        return $dbh;
    }





?>