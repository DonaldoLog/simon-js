function divisienEntera(dividendo, divisor) {
    if (dividendo < divisor) {
        return 0
    }
     return 1 + divisienEntera(dividendo - divisor, divisor)
}