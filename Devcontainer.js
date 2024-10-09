{
    "version": "0.2.0",
    "configurations": [

      {
            "type": "chrome",       
            "request": "launch",
            "name": "Uruchom przeglądarkę Chrome względem hosta lokalnego",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}"
      }
      {
            "name": "Attach to Port",
            "type": "jdk",
            "request": "attach",
            "hostName": "${command:jdk.java.attachDebugger.connector.com.sun.jdi.SocketAttach.hostName}",
            "port": "${command:jdk.java.attachDebugger.connector.com.sun.jdi.SocketAttach.port}"
      }
      {
            "type": "node-terminal",
            "name": "Terminal debugowania JavaScript",
            "request": "launch", 
            "cwd": "${workspaceFolder}"
      }
   ] 
}
