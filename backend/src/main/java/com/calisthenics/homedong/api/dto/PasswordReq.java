package com.calisthenics.homedong.api.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * Created by Seo Youngeun on 2021-08-02
 */
@Getter
@Setter
@ApiModel("PasswordRequst")
public class PasswordReq {

    @ApiModelProperty(name = "현재 유저 password", example = "yesyes")
    @NotNull
    @Size(min = 3, max = 100)
    private String password;

}
