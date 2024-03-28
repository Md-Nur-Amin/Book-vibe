const getStoredWishlist = () =>{
    const storeWishlist = localStorage.getItem('whilist_app')
    if(storeWishlist){
        return JSON.parse(storeWishlist);
    }
    return []; 
}




const saveWishlist = bookId =>{
    const storeManyWishlist = getStoredWishlist();
    const exist = storeManyWishlist.find(whishlistId => whishlistId === bookId );
    if(!exist){
        storeManyWishlist.push(bookId);
        localStorage.setItem('whilist_app', JSON.stringify(storeManyWishlist))
    }
}

export {getStoredWishlist, saveWishlist}