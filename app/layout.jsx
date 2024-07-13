import '@styles/globals.css';
import Nav from '@components/nav';
import Provider from '@components/provider';

export const metadata = {
    title: 'prompthub',
    description: 'Discover & share AI prompts'
};

const Layout = ({ children  }) => {
  return (
    <html lang="en">
        <body>
            <Provider >
            <div className="main">
                <div className="gradient" />

            </div>

            <main className="app">
                <Nav />
                {children}

            </main>
            </Provider>
            
        </body>




    </html>
  )
}

export default Layout