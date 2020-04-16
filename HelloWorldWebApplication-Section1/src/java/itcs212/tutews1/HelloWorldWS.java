/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package itcs212.tutews1;

import java.text.DecimalFormat;
import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;

/**
 *
 * @author Nongnam
 */
@WebService(serviceName = "HelloWorldWS")
public class HelloWorldWS {

    /**
     * This is a sample web service operation
     */
    @WebMethod(operationName = "hello")
    public String hello(@WebParam(name = "name") String txt) {
        return "Hello " + txt + " !";
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "squareMethod")
        public String squareMethod(@WebParam(name = "number") final
    int number) {
        //TODO write your implementation code here:
        int result = number*number;
        String strResult = Integer.toString(result);
        return strResult;
 }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "ConvertercmToInch")
    public String ConvertercmToInch(@WebParam(name = "cm") final double cm) {
        //TODO write your implementation code here:
        DecimalFormat X = new DecimalFormat("#.##");
        double result = cm/2.54;
        return (X.format(result));
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "CelsiusToFahrenheit")
    public String CelsiusToFahrenheit(@WebParam(name = "Celsius") final double Celsius) {
        //TODO write your implementation code here:
        DecimalFormat X = new DecimalFormat("#.##");
        double result = Celsius*9/5+32;
        return (X.format(result));
    }
    
    /**
     * Web service operation
     */
    @WebMethod(operationName = "getMydetail")
    public String GetMydetail(@WebParam(name = "ID") final String ID) {
        //TODO write your implementation code here:
        return "\"Nattawipa\""+",\"Saetae\""+",\"085-112-3939\""+",\"99/23 Kamnanman13 Ekkachai Rd., Bangbon Bangkok Thailand 10150\"";
    }
}
