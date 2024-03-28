

const Library = () => {
    return (
        <div className="lg:mx-50">
            <div>
                <div className="bg-[#1313130D] lg:rounded-2xl border py-8  lg:mx-[40px] my-9">
                    <h2 className="text-[#131313] font-bold text-3xl text-center">Welcome to Library</h2>
                </div>

                <div className="flex justify-center text-center my-8">
                    <h2 className="lg:text-3xl font-bold "> Features Coming Soon</h2>
                </div>
                <span className="loading loading-spinner loading-lg mx-[45%] lg:mx-[50%] mb-20">  </span>
            </div>
        </div>
    );
};

export default Library;