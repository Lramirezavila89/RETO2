<?php
// CONEXION
require_once("conexion/conexion.php");
$NewConn = new ConnectionMySQL();
$NewConn->CreateConnection();


//AJAX
$json = file_get_contents("php://input");
$objeto = json_decode($json);


$id=$objeto->id;



$sql="DELETE FROM vehiculos WHERE id_v='$id' ";
$NewConn->ExecuteQuery($sql);

 if($NewConn->ExecuteQuery($sql)){
    echo json_encode('si');
 }else{
    echo json_encode('no');   
}   
    




