(function() {var implementors = {};
implementors['openssl'] = ["impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='openssl/bio/struct.MemBio.html' title='openssl::bio::MemBio'>MemBio</a>","impl&lt;S: <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='openssl/ssl/struct.SslStream.html' title='openssl::ssl::SslStream'>SslStream</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='enum' href='openssl/ssl/enum.MaybeSslStream.html' title='openssl::ssl::MaybeSslStream'>MaybeSslStream</a>&lt;S&gt; <span class='where'>where S: <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a></span>",];implementors['hyper'] = ["impl&lt;S: <a class='trait' href='hyper/net/trait.NetworkStream.html' title='hyper::net::NetworkStream'>NetworkStream</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='hyper/client/pool/struct.PooledStream.html' title='hyper::client::pool::PooledStream'>PooledStream</a>&lt;S&gt;","impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='hyper/client/response/struct.Response.html' title='hyper::client::response::Response'>Response</a>","impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='enum' href='hyper/client/enum.Body.html' title='hyper::client::Body'>Body</a>&lt;'a&gt;","impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='hyper/http/h1/struct.Http11Message.html' title='hyper::http::h1::Http11Message'>Http11Message</a>","impl&lt;R: <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='enum' href='hyper/http/h1/enum.HttpReader.html' title='hyper::http::h1::HttpReader'>HttpReader</a>&lt;R&gt;","impl&lt;S&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='hyper/http/h2/struct.Http2Message.html' title='hyper::http::h2::Http2Message'>Http2Message</a>&lt;S&gt; <span class='where'>where S: <a class='trait' href='hyper/http/h2/trait.CloneableStream.html' title='hyper::http::h2::CloneableStream'>CloneableStream</a></span>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='hyper/net/struct.HttpStream.html' title='hyper::net::HttpStream'>HttpStream</a>","impl&lt;S: <a class='trait' href='hyper/net/trait.NetworkStream.html' title='hyper::net::NetworkStream'>NetworkStream</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='enum' href='hyper/net/enum.HttpsStream.html' title='hyper::net::HttpsStream'>HttpsStream</a>&lt;S&gt;","impl&lt;'a, 'b&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='hyper/server/request/struct.Request.html' title='hyper::server::request::Request'>Request</a>&lt;'a, 'b&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
