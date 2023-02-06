<?php
// CONEXION
require_once("conexion/conexion.php");
$NewConn = new ConnectionMySQL();
$NewConn->CreateConnection();



$sql="SELECT * FROM vehiculos ";
$result = $NewConn->ExecuteQuery($sql);
$contar = mysqli_num_rows($result);


if($contar==0){
   echo json_encode('no');
}else{
 
while($row=$NewConn->GetRows($result)){
      $id = $row[0];
      $nombre = $row[1];
      $empuje = $row[2];
      $destino = $row[3];
      $combustible = $row[4];
      $pais = $row[5];
      $id_r = $row[6];

      $sql2="SELECT * FROM naves WHERE id_relacional_naves ='$id_r'";
      $result2 = $NewConn->ExecuteQuery($sql2);
      $row2=$NewConn->GetRows($result2);
      $dato = $row2[2];
      $tipo = $row2[3];

      $datos[] = array(
         'id' => $id,
         'nombre' => $nombre,
         'destino' => $destino,
         'tipo' => $tipo
      );
       

}
echo json_encode($datos); 
}