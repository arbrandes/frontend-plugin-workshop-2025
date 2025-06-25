## Launching a development environment from scratch

As an alternative to the pre-built environment, you can run the following in a machine with at least 2 CPUs and 16GB of RAM.  You'll need a recent pip and Docker, as well as a good internet connection.  Note that this will take over an hour in ideal conditions (which may not be the case at the conference venue).

- [Tutor dev setup](https://docs.tutor.edly.io/dev.html)

And import the demo course

```bash
tutor dev do importdemocourse
tutor dev run cms ./manage.py cms update_course_outline course-v1:OpenedX+DemoX+DemoCourse
```

After following those steps, you'll also want to set up the Learner Dashboard MFE:

```bash
git clone https://github.com/openedx/frontend-app-learner-dashboard.git
tutor mounts add frontend-app-learner-dashboard/
```

And copy an [example `env.config.jsx`](../operators/configs/basic-example.env.config.jsx) to the root of your `frontend-app-learner-dashboard` directory.
