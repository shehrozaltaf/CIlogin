<?php if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

class MLogin extends CI_Model
{
    public $Modal;

    public function __construct()
    {
        parent::__construct();
        $this->load->model('custom');
        $this->Modal = new Custom();
    }

    function validate($user, $pass)
    {
        $this->db->select(' username,password');
        $this->db->from('user');
        $this->db->where('username', $user);
        $this->db->where('password', $pass);
        $query = $this->db->get();
        $res = $query->result();
        return $res;
        /*  $query="select * from `user` where UserName='$user' and Password='$pass'";
          $result=$this->Modal->selectAll($query);
          return $result;*/
    }


    function ForgetPass($email)
    {
        $query = "SELECT * FROM `user` where Email='" . $email . "' ";
        return $this->Modal->selectAll($query);
    }

    function updateUserPassword($idUser, $newPassword)
    {
        $pramArray = array();
        $pramArray['Password'] = $newPassword;
        $result = $this->Modal->Edit($pramArray, 'idUser', $idUser, 'user');
        if ($result) {
            echo 1;
        } else {
            echo 2;
        }
    }

    function ChkOldPassword($id, $Password)
    {
        $query = "select Password from user where idUser='$id' and Password='$Password'";
        return $this->Modal->selectAll($query);
    }

    function changeUserPassword($idPerson, $newPassword)
    {
        $pramArray = array();
        $pramArray['Password'] = $newPassword;
        $result = $this->Modal->Edit($pramArray, 'idUser', $idPerson, 'user');
        if ($result) {
            echo 1;
        } else {
            echo 2;
        }
    }
}