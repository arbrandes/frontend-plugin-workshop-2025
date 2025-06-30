## Connect to the pre-built development environment

Test the connection with the IP address you were provided:

```
ssh -o TCPKeepAlive=yes -o ServerAliveInterval=120 workshop@{IP_YOU_SELECTED}
```

You'll need to use SSH port forwarding before you can access the Open edX instance using your browser.  Use the included [script](../scripts/connect.sh) to easily forward the dev ports:

```bash
ip=THE_IP_YOU_SELECTED
echo "The password is: video barstool gravitate probe"
ssh -o TCPKeepAlive=yes -o ServerAliveInterval=120 $(for i in 8000 8001 1984 1993 1994 1995 1996 1997 1999 2000 2001 2002; do echo -L $i:localhost:$i ; done) workshop@${ip};
```

That's it!  Just make sure you don't already have a local Tutor dev running, otherwise the port forwarding won't work.

Tip: You can use VSCode to edit files remotely via the [Remote-SSH extension](https://code.visualstudio.com/docs/remote/ssh).
