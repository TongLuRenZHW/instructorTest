package swl.practice.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import swl.practice.dao.UserMapper;
import swl.practice.model.User;
import swl.practice.service.UserService;



@Service("userService")
public class UserServiceImpl implements UserService{
	
	private UserMapper userMapper;

	public UserMapper getUserMapper() {
		return userMapper;
	}
	
	@Autowired
	public void setUserMapper(UserMapper userMapper) {
		this.userMapper = userMapper;
	}

	@SuppressWarnings("finally")
	public User selectByPrimaryKey(Integer userId) {
		User user=new User();
		
		try{
			user=userMapper.selectByPrimaryKey(userId);
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			return user;
		}
	}
	
	@SuppressWarnings("finally")
	public User findUserByLoginNameAndPswd(String userLoginname,String userPassword) throws Exception {
		User user = new User();
		user.setUserLoginname(userLoginname);
		user.setUserPasswrd(userPassword);
		
		try {
			user=userMapper.selectByLoginNameAndPswd(user);
			
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			return user;
		}
	}
	
}
