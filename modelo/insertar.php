<?php
// CONEXION
require_once("conexion/conexion.php");
$NewConn = new ConnectionMySQL();
$NewConn->CreateConnection();

//AJAX
$json = file_get_contents("php://input");
$objeto = json_decode($json);


$nombre      =$objeto->nombre;
$empuje      =$objeto->empuje;
$destino     =$objeto->destino;
$pais        =$objeto->pais;
$datoNuevo   =$objeto->datoNuevo;
$tipo        =$objeto->tipo;

$code = rand(10000, 99999);



        $sql="INSERT INTO vehiculos (nombre,empuje,destino,pais,id_relacional_vehiculos) 
        VALUE ('".$nombre."','".$empuje."','".$destino."','".$pais."','".$code."')";
        $NewConn->ExecuteQuery($sql);
        $sql2="INSERT INTO naves (id_relacional_naves,dato_nuevo,tipo_nave) VALUE ('".$code."','".$datoNuevo."','".$tipo."')";
        $NewConn->ExecuteQuery($sql2);

        echo json_encode('se ha guardado con exito');
    


        