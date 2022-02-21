const API_KEY=process.env.API_KEY;

export default{
    fetchTrending:{
        title:'Trending',
        url:`/trending/all/day?api_key=${API_KEY}&language=en-US`
    },
     fetchTopRated:{
        title:'Top Rated',
        url:`/trending/all/day?api_key=${API_KEY}&language=en-US`
    },fetchAction:{
        title:'Action',
        url:`/trending/all/day?api_key=${API_KEY}&language=en-US`
    },fetchCommedy:{
        title:'Commedy',
        url:`/trending/all/day?api_key=${API_KEY}&language=en-US`
    },fetchHorror:{
        title:'Horror',
        url:`/trending/all/day?api_key=${API_KEY}&language=en-US`
    }
    ,fetchRomance:{
        title:'Romance',
        url:`/trending/all/day?api_key=${API_KEY}&language=en-US`
    },fetchMystery:{
        title:'Mystery',
        url:`/trending/all/day?api_key=${API_KEY}&language=en-US`
    }
    ,fetchScifi:{
        title:'Sci-Fi',
        url:`/trending/all/day?api_key=${API_KEY}&language=en-US`
    }
    ,fetchWestern:{
        title:'Western',
        url:`/trending/all/day?api_key=${API_KEY}&language=en-US`
    }
    ,fetchAnimation:{
        title:'Animation',
        url:`/trending/all/day?api_key=${API_KEY}&language=en-US`
    },
    fetchTvMovie:{
        title:'Tv Movie',
        url:`/trending/all/day?api_key=${API_KEY}&language=en-US`
    },
    
}