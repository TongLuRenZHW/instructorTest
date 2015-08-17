package swl.practice.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJacksonJsonView;

import swl.practice.model.User;
import swl.practice.service.UserService;


@Controller
@RequestMapping("/userController")
public class UserController {
	private UserService userService;

	public UserService getUserService() {
		return userService;
	}

	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	
	@SuppressWarnings({ "finally", "unchecked" })
	@RequestMapping("/selectByPrimaryKey")
    public ModelAndView selectByPrimaryKey(int id, HttpServletRequest request,HttpServletResponse response) {
    	ModelAndView mav = new ModelAndView();
		MappingJacksonJsonView view = new MappingJacksonJsonView();
		@SuppressWarnings("rawtypes")
		Map map = new HashMap();
		try {
			User user=new User();
			user=userService.selectByPrimaryKey(id);
			map.put("result", Boolean.TRUE);
			map.put("message", "成功！");
			map.put("user", user);
		} catch (Exception e) {
			map.put("result", Boolean.FALSE);
			map.put("message", "执行出现出错！");
			e.printStackTrace();
		}finally{
			view.setAttributesMap(map);
			mav.setView(view);
			return mav;
		}
	}
	
	  /* 自己写的方法*/
    /*登录名和密码login*/
    @SuppressWarnings({ "finally", "unchecked" })
   	@RequestMapping("/selectUserByLoginNameAndPswd")
       public ModelAndView selectUserByLoginNameAndPswd(String userLoginname, String userPassword,HttpServletRequest request,HttpServletResponse response) {
//       	System.out.println("登录");
    	ModelAndView mav = new ModelAndView();
   		MappingJacksonJsonView view = new MappingJacksonJsonView();
   		@SuppressWarnings("rawtypes")
   		Map map = new HashMap();
   		try {
   			User user=new User();
   			user = userService.findUserByLoginNameAndPswd(userLoginname, userPassword);
   			if(user == null) {
   				System.out.println(user);
   				map.put("result", Boolean.FALSE);
   	   			map.put("message", "执行出错！");
   			}else {		    	    
   			    map.put("result", Boolean.TRUE);
   	   			map.put("message", "成功！");
   	   			map.put("user", user);
   			}  			
   		} catch (Exception e) {
   			map.put("result", Boolean.FALSE);
   			map.put("message", "执行出现出错！");
   			e.printStackTrace();
   		}finally{
   			view.setAttributesMap(map);
   			mav.setView(view);
   			return mav;
   		}
   	}
}
