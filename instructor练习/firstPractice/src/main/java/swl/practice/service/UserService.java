package swl.practice.service;

import swl.practice.model.User;

public interface UserService {

	public User selectByPrimaryKey(Integer userId);
	
	public User findUserByLoginNameAndPswd(String userLoginname,String userPassword) throws Exception;
}
