export function  Skelton(){
    return(<>
    <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
	<div className="h-48 rounded-t dark:bg-gray-700"></div>
	<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
		<div className="w-full h-6 rounded dark:bg-gray-700"></div>
		<div className="w-full h-6 rounded dark:bg-gray-700"></div>
		<div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
	</div>
</div>
    </>)
}


export function GridSkelton(){
	return(<>
	
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <span >
           
          </span>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Skelton/>
            <Skelton/>
            <Skelton/>
          </div>
          <div className="flex justify-center">
             
          </div>
        </div>
	</>)
}