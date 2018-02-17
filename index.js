/**
 * Below are a list of people who are used multiple times,
 * usually in cases where a man has multiple wives,
 * or where a man also marries his sister. 🤔
 */
const Adah = make("Adah");
const Zillah = make("Zillah");
const Sarah = make("Sarah");
const Hagar = make("Hagar");
const CainansDaughter = make("???");
const Nahor = make("Nahor");
const Rebecca = make("Rebecca");
const Rachel = make("Rachel");
const Leah = make("Leah");
const Zilpah = make("Zilpah");
const Bilhah = make("Bilhah");

const makeGenealogy = haveBabies(
  marry(make("Adam"), make("Eve")),
  haveBabies(
    make("Cain"),
    haveBabies(
      make("Enoch"),
      haveBabies(
        make("Irad"),
        haveBabies(
          make("Mehujael"),
          haveBabies(
            make("Methushael"),
            haveBabies(
              marry(make("Lamech"), Adah, Zillah),
              make("Jabal", { mother: Adah }),
              make("Jubal", { mother: Adah }),
              make("Tubal-Cain", { mother: Zillah }),
              make("Naamah", { mother: Zillah })
            )
          )
        )
      )
    )
  ),
  make("Abel"),
  haveBabies(
    make("Seth"),
    haveBabies(
      make("Enos"),
      haveBabies(
        make("Kenan"),
        haveBabies(
          make("Mahalalel"),
          haveBabies(
            make("Jared"),
            haveBabies(
              make("Enoch"),
              haveBabies(
                make("Methuselah"),
                haveBabies(
                  make("Lamech"),
                  haveBabies(
                    make("Noah"),
                    haveBabies(
                      make("Shem"),
                      make("Elam"),
                      make("Ashur"),
                      haveBabies(
                        make("Arphaxad"),
                        haveBabies(make("Cainan"), CainansDaughter),
                        haveBabies(
                          marry(make("Salah"), CainansDaughter),
                          haveBabies(
                            make("Eber"),
                            haveBabies(
                              make("Peleg"),
                              haveBabies(
                                make("Reu"),
                                haveBabies(
                                  make("Serug"),
                                  haveBabies(
                                    Nahor,
                                    haveBabies(
                                      make("Terah"),
                                      Sarah,
                                      haveBabies(
                                        marry(make("Abraham"), Sarah, Hagar),
                                        haveBabies(
                                          marry(
                                            make("Isaac", { mother: Sarah }),
                                            Rebecca
                                          ),
                                          haveBabies(
                                            make("Esau"),
                                            makeTribe("Edomites")
                                          ),
                                          haveBabies(
                                            marry(
                                              make("Jacob"),
                                              Rachel,
                                              Leah,
                                              Zilpah,
                                              Bilhah
                                            ),
                                            make("Reuben", { mother: Leah }),
                                            make("Simeon", { mother: Leah }),
                                            make("Levi", { mother: Leah }),
                                            make("Judah", { mother: Leah }),
                                            make("Dan", { mother: Bilhah }),
                                            make("Naphtali", {
                                              mother: Bilhah
                                            }),
                                            make("Gad", { mother: Zilpah }),
                                            make("Asher", { mother: Zilpah }),
                                            make("Issachar", { mother: Leah }),
                                            make("Zebulun", { mother: Leah }),
                                            make("Dinah", { mother: Leah }),
                                            make("Jospeh", { mother: Rachel }),
                                            make("Benjamin", { mother: Rachel })
                                          )
                                        ),
                                        haveBabies(
                                          make("Ishmael", { mother: Hagar }),
                                          makeTribe("Ishmaelites")
                                        )
                                      ),
                                      make("Nahor"),
                                      haveBabies(
                                        make("Haran"),
                                        haveBabies(
                                          marry(Nahor, make("Milcah")),
                                          makeTribe("7 sons"),
                                          haveBabies(
                                            make("Bethuel"),
                                            Rebecca,
                                            haveBabies(
                                              make("Laban"),
                                              Rachel,
                                              Leah
                                            )
                                          )
                                        ),
                                        make("Lot"),
                                        make("Iscah")
                                      )
                                    )
                                  )
                                )
                              )
                            ),
                            haveBabies(make("Joktan"), makeTribe("13 sons"))
                          )
                        )
                      ),
                      make("Lud"),
                      haveBabies(make("Aram"), makeTribe("4 sons"))
                    ),
                    haveBabies(make("Ham"), makeTribe("4 sons")),
                    haveBabies(make("Japheth"), makeTribe("7 sons"))
                  )
                )
              )
            )
          )
        )
      )
    )
  )
);

// Functions that make things. I'm keeping this fairly simple for now.
function haveBabies(parent, ...children) {
  return {
    ...parent,
    children
  };
}

function marry(man, ...wife) {
  return {
    man,
    wife
  };
}

function make(name, options) {
  return {
    name,
    ...options
  };
}

function makeTribe(name) {
  return {
    name
  };
}
