package com.nixsolutions;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController
{
  @GetMapping("/")
  public String getMainPage()
  {
    return "forward:/index.html";
  }

  @GetMapping("/add")
  public String getAddPage()
  {
    return "forward:/index.html";
  }

  @GetMapping("/edit/{id}")
  public String getEditPage()
  {
    return "forward:/index.html";
  }
}
