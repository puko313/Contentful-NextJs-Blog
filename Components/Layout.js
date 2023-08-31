import Nav from './Nav'
export default function Layout({children}) {
    return (
      <>         
        <div className="bg-gray-100">
          <Nav />
          <div className=" items-center overflow-auto h-screen">
           <main> {children}</main>
          </div>
        </div>
      </>
    );
  }