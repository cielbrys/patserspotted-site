<?php

require_once( __DIR__ . '/DAO.php');

class TodoDAO extends DAO {

  public function selectAll(){
      $sql = "SELECT * FROM `werkdagen`";
      $stmt = $this->pdo->prepare($sql);
      $stmt->execute();
      return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
  

  public function selectById($id){
    $sql = "SELECT * FROM `werkdagen` WHERE `uur` LIKE :uur";
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindValue(':uur', '%' . $id . '%');
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }


  public function insert($data) {
    $errors = $this->validate( $data );
    if (empty($errors)) {
      $sql = "INSERT INTO `werkdagen` (`uur`, `text`) VALUES (:uur, :text)";
      $stmt = $this->pdo->prepare($sql);
      $stmt->bindValue(':uur', $data['uur']);
      $stmt->bindValue(':text', $data['text']);
    }
    return false;
  }

  public function validate( $data ){
    $errors = [];
    if (!isset($data['uur'])) {
      $errors['created'] = 'Gelieve uur in te vullen';
    }
    if (empty($data['text']) ){
      $errors['text'] = 'Gelieve een text in te vullen';
    }
    return $errors;
  }

}
