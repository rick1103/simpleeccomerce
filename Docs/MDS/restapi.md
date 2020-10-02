# arquitectura REST

'''


htto://www.example.org/locations/us/ny/new_york_city

router.get("/locations/:country/:statae/:new_york_city", (req,res)=>{

}
)

www.example.org : class
    +locations
        (country, state, city) {
            newyorkdata = sql(country, state, city)

            return newyorkdata
        }