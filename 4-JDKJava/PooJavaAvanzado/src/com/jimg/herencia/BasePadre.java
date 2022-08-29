package com.jimg.herencia;

public class BasePadre {
    private int a;
    private double b;
    private String c;

    public BasePadre(){

    }
    public void visualizarA(){
        System.out.println("objeto h -> Soy un método de la clase basePadre");

    }
    public void visualizarABC(){
        System.out.println("objeto ho -> Soy el método visualizarABC");

    }

    public int getA() {
        return a;
    }

    public double getB() {
        return b;
    }

    public String getC() {
        return c;
    }

    public void setA(int a) {
        this.a = a;
    }

    public void setB(double b) {
        this.b = b;
    }

    public void setC(String c) {
        this.c = c;
    }
}
