package cn.wolfcode.wms.domain;

import lombok.Getter;
import lombok.Setter;

@Getter@Setter
public class Depot extends BaseDomain{
	private static final long serialVersionUID = 1L;

	private String name;

    private String location;

}