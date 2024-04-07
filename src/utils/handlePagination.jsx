const handlePagination = (action, display, setDisplay, pageData, fetchData, setPageData, setIsLoading) => {
    let displayClone = { ...display };
    if (action === "next" && displayClone.currentPage < pageData.count / displayClone.limit) {
        displayClone.skip += displayClone.limit
        displayClone.currentPage++;
    } else if (action === "previous" && displayClone.skip > 0) {
        displayClone.skip -= displayClone.limit
        displayClone.currentPage--;
    }
    console.log(display);
    setDisplay(displayClone);
    fetchData(setPageData, setIsLoading, `/characters?limit=${display.limit}&skip=${display.skip}&name=${display.name}`);
}

export default handlePagination;