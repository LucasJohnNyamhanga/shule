import React, { useContext, useEffect, useState } from "react";
import Styles from "../../styles/navigation.module.scss";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Link from "next/link";
import { NavContext } from "../../components/context/StateContext";
import { useSession, getSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import User from "../layout/User";

const Nav = () => {
  const { setNavActive, navActive } = useContext(NavContext);
  const { data: session, status } = useSession();
  const [limt, setLimit] = useState(0);

  const { push, asPath } = useRouter();

  let handleSignIn = () => {
    push(`/Auth/SignIn?callbackUrl=${asPath}`);
  };

  let handleLogOut = () => {
    signOut({ redirect: false }).then(() => {
      setLimit(0);
      push("/");
    });
  };

  useEffect(() => {}, [navActive]);

  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainerTop}>
        <div className={Styles.NavDetails}>
          <div className={Styles.topAdvatisment}>
            <p>
              Learning Resource Center for Notes, Past Papers, Online Quizzes
              and Library - Download Now
            </p>
          </div>
        </div>
        <div className={Styles.NavHeader}>
          <nav className={Styles.nav}>
            <Link passHref href="/">
              <a>
                <div className={Styles.logo}>
                  <div className={Styles.icon}>
                    <AutoStoriesIcon />
                  </div>
                  <div className={Styles.shule}>Shule</div>
                </div>
              </a>
            </Link>
            <div className={Styles.links}>
              <ul>
                <li
                  className={
                    "Notes" == navActive ? Styles.active : Styles.links
                  }
                >
                  <Link href="/">
                    <a>
                      <div
                        onClick={() => {
                          setNavActive("Notes");
                        }}
                      >
                        Notes
                      </div>
                    </a>
                  </Link>
                </li>

                <li
                  className={
                    "Review" == navActive ? Styles.active : Styles.links
                  }
                >
                  <Link href="/Review">
                    <a>
                      <div
                        onClick={() => {
                          setNavActive("Review");
                        }}
                      >
                        Quiz
                      </div>
                    </a>
                  </Link>
                </li>

                <li
                  className={
                    "Exams" == navActive ? Styles.active : Styles.links
                  }
                >
                  <Link href="/Exams">
                    <a>
                      <div
                        onClick={() => {
                          setNavActive("Exams");
                        }}
                      >
                        Exams
                      </div>
                    </a>
                  </Link>
                </li>

                <li
                  className={
                    "References" == navActive ? Styles.active : Styles.links
                  }
                >
                  <Link href="/References">
                    <a>
                      <div
                        onClick={() => {
                          setNavActive("References");
                        }}
                      >
                        Library
                      </div>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={Styles.buttonsNav}>
              {status == "loading" ? (
                <div className={Styles.validating}>Validating...</div>
              ) : session ? (
                <>
                  <User signOut={handleLogOut} />
                </>
              ) : (
                <>
                  {/* <div className={Styles.Sign}>
										Sign In
									</div> */}
                  <div onClick={handleSignIn} className={Styles.Register}>
                    Sign In
                  </div>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
