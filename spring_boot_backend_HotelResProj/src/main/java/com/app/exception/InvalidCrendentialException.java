package com.app.exception;

@SuppressWarnings("serial")
public class InvalidCrendentialException extends RuntimeException {
	
	public InvalidCrendentialException(String msg) {
		super(msg);
	}

}
