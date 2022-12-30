# python3 -m http.server 8001 - will list this directory and files

from http.server import BaseHTTPRequestHandler, HTTPServer


class HandlerClass(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(
            bytes("<html><head><title>Python server</title></head>", "utf-8"))
        self.wfile.write(bytes("<p>Request: %s</p>" % self.path, "utf-8"))
        self.wfile.write(bytes("<body>", "utf-8"))
        self.wfile.write(
            bytes("<p>This is an example web server.</p>", "utf-8"))
        self.wfile.write(bytes("</body></html>", "utf-8"))


def run(server_class=HTTPServer, handler_class=HandlerClass):
    server_address = ('', 8001)
    httpd = server_class(server_address, handler_class)
    print("Listening on http://localhost:8081/")
    httpd.serve_forever()


run()
