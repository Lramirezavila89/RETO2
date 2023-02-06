<?php
// CONEXION
require_once("conexion/conexion.php");
$NewConn = new ConnectionMySQL();
$NewConn->CreateConnection();


//AJAX
$json = file_get_contents("php://input");
$objeto = json_decode($json);


$nombre      =$objeto->nombre;
$destino      =$objeto->destino;



$sql="SELECT * FROM vehiculos WHERE (nombre LIKE '%$nombre%' OR pais LIKE '%$nombre%') AND destino LIKE '%$destino%' ";
$result = $NewConn->ExecuteQuery($sql);
$contar = mysqli_num_rows($result);

 if($contar == 0){
    echo json_encode('0');
 }else{
    while($row=$NewConn->GetRows($result)){
        $nombre = $row[1];
        $empuje = $row[2];
        $destino = $row[3];
        $combustible = $row[4];
        $pais = $row[5];
        $id_r = $row[6];

      $datos[] = array(
         'nombre' => $nombre,
         'empuje' => $empuje,
         'destino' => $destino,
         'combustible' => $combustible,
         'pais' => $pais,
         'id_r' => $id_r
      );
       
    }   
    
    
    echo json_encode($datos); 
}


