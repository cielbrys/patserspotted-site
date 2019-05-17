<?php

require_once __DIR__ . '/Controller.php';
require_once __DIR__ . '/../dao/TodoDAO.php';

class TodosController extends Controller {

  private $todoDAO;
  private $todoCommentDAO;

  function __construct() {
    $this->todoDAO = new TodoDAO();
  }

  public function index() {
    if (!empty($_POST['action'])) {
      if ($_POST['action'] == 'startJob') {
        $data = array(
          'uur' => date('Y-m-d H:i:s'),
          'text' => $_POST['action']
        );
        $insertTodoResult = $this->todoDAO->insert($data);
        if (!$insertTodoResult) {
          $errors = $this->todoDAO->validate($data);
          $this->set('errors', $errors);
        } else {
          header('Location: index.php');
          exit();
        }
      } else if ($_POST['action'] == 'stopJob') {
        $data = array(
          'uur' => date('Y-m-d H:i:s'),
          'text' => $_POST['action']
        );
        $insertTodoResult = $this->todoDAO->insert($data);
        if (!$insertTodoResult) {
          $errors = $this->todoDAO->validate($data);
          $this->set('errors', $errors);
        } else {
          header('Location: index.php');
          exit();
        }
      }
    }

    $todos = $this->todoDAO->selectAll();
    $this->set('todos', $todos);
    $this->set('title', 'Overview');
  }

  public function view() {
    if (isset($_GET['date'])) {
      $todo = $this->todoDAO->selectById($_GET['date']);
      $this->set('todo', $todo);
    }
    if (!empty($todo)) {
      if (!empty($_POST['action']) && $_POST['action'] == 'insertComment') {
        $data['created'] = date('Y-m-d H:i:s');
        $data['modified'] = date('Y-m-d H:i:s');
        $data['todo_id'] = $todo['id'];
        $data['text'] = $_POST['text'];
        $insertedComment = $this->todoCommentDAO->insert($data);
        if (empty($insertedComment)) {
          $errors = $this->todoCommentDAO->validate($data);
          $this->set('errors', $errors);
        } else {
          header('Location: index.php?page=todo-detail&id=' . $todo['id']);
          exit();
        }
      }
      if (!empty($_GET['action'])) {
        if ($_GET['action'] == 'delete_comment' && isset($_GET['comment_id'])) {
          $this->todoCommentDAO->delete($_GET['comment_id']);
        }
      }
    
    }
    $this->set('title', 'Detail');
  }

}
