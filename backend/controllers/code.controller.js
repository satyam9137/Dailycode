// // import db from "../db.js";
// // import axios from "axios";
// // const LANG_MAP = {
// //   python: { lang: "python", version: "3.10.0", file: "main.py" },
// //   javascript: { lang: "javascript", version: "18.15.0", file: "main.js" },
// //   c: { lang: "c", version: "10.2.0", file: "main.c" },
// //   cpp: { lang: "cpp", version: "10.2.0", file: "main.cpp" },
// // };

// // /*==================Level Controller Functions==================*/

// // export async function getLevels(req, res) {
// //   const { userId } = req.params;

// //   // user progress
// //   const [[progress]] = await db.query(
// //     "SELECT current_level FROM user_progress WHERE user_id=?",
// //     [userId]
// //   );

// //   const currentLevel = progress ? progress.current_level : 1;

// //   // all levels
// //   const [levels] = await db.query(
// //     "SELECT level_no, title FROM levels ORDER BY level_no"
// //   );

// //   res.json({
// //     currentLevel,
// //     levels
// //   });
// // }

// // /* ================= RUN CODE ================= */
// // export async function runCode(req, res) {
// //   const { code, language, input } = req.body;

// //   const config = LANG_MAP[language];
// //   if (!config) {
// //     return res.status(400).json({ message: "Unsupported language" });
// //   }

// //   const piston = await axios.post(
// //     "https://emkc.org/api/v2/piston/execute",
// //     {
// //       language: config.lang,
// //       version: config.version,
// //       files: [{ name: config.file, content: code }],
// //       stdin: input || "",
// //     }
// //   );

// //   const output =
// //     (piston.data.run.stdout || "") +
// //     (piston.data.run.stderr || "");

// //   res.json({ output: output.trim() });
// // }


// // /* ================= GET CURRENT LEVEL ================= */
// // export async function getLevel(req, res) {
// //   const { userId } = req.params;

// //   const [rows] = await db.query(
// //     "SELECT current_level FROM user_progress WHERE user_id=?",
// //     [userId]
// //   );

// //   let currentLevel = 1;

// //   if (rows.length === 0) {
// //     await db.query(
// //       "INSERT INTO user_progress (user_id, current_level) VALUES (?,1)",
// //       [userId]
// //     );
// //   } else {
// //     currentLevel = rows[0].current_level;
// //   }

// //   const [levels] = await db.query(
// //     "SELECT level_no, title, description FROM levels WHERE level_no=?",
// //     [currentLevel]
// //   );

// //   res.json({ level: levels[0] });
// // }

// // /* ================= SUBMIT CODE ================= */
// // export async function submitCode(req, res) {
// //   const { userId, code, language } = req.body;

// //   const config = LANG_MAP[language];
// //   if (!config) {
// //     return res.json({ verdict: "Unsupported language ❌" });
// //   }

// //   const [[progress]] = await db.query(
// //     "SELECT current_level FROM user_progress WHERE user_id=?",
// //     [userId]
// //   );

// //   const levelNo = progress.current_level;

// //   const [tests] = await db.query(
// //     "SELECT input_data, expected_output FROM test_cases WHERE level_no=?",
// //     [levelNo]
// //   );

// //   for (let i = 0; i < tests.length; i++) {
// //     const test = tests[i];

// //     const out = await axios.post(
// //       "https://emkc.org/api/v2/piston/execute",
// //       {
// //         language: config.lang,
// //         version: config.version,
// //         files: [{ name: config.file, content: code }],
// //         stdin: test.input_data,
// //       }
// //     );

// //     const userOutput =
// //       ((out.data.run.stdout || "") +
// //         (out.data.run.stderr || "")).trim();

// //     // if (userOutput !== test.expected_output.trim()) {
// //     //   return res.json({
// //     //     verdict: "❌ Wrong Answer",
// //     //     failed_test: i + 1,
// //     //   });
// //     // }
// //     const normalize = (s) =>
// //   s.replace(/\r/g, "").trim();

// // if (normalize(userOutput) !== normalize(test.expected_output)) {
// //    return res.json({
// //         verdict: "❌ Wrong Answer",
// //         failed_test: i + 1,
// //        });

// //   }

// //   await db.query(
// //     "UPDATE user_progress SET current_level = current_level + 1 WHERE user_id=?",
// //     [userId]
// //   );

// //   res.json({ verdict: "✅ Accepted" });
// // }
// // };












// // import db from "../db.js";
// // import axios from "axios";
// // const LANG_MAP = {
// //   python: { lang: "python", version: "3.10.0", file: "main.py" },
// //   javascript: { lang: "javascript", version: "18.15.0", file: "main.js" },
// //   c: { lang: "c", version: "10.2.0", file: "main.c" },
// //   cpp: { lang: "cpp", version: "10.2.0", file: "main.cpp" },
// // };

// // /*==================Level Controller Functions==================*/

// // export async function getLevels(req, res) {
// //   const { userId } = req.params;

// //   // user progress
// //   const [[progress]] = await db.query(
// //     "SELECT current_level FROM user_progress WHERE user_id=?",
// //     [userId]
// //   );

// //   const currentLevel = progress ? progress.current_level : 1;

// //   // all levels
// //   const [levels] = await db.query(
// //     "SELECT level_no, title FROM levels ORDER BY level_no"
// //   );

// //   res.json({
// //     currentLevel,
// //     levels
// //   });
// // }

// // /* ================= RUN CODE ================= */
// // export async function runCode(req, res) {
// //   const { code, language, input } = req.body;

// //   const config = LANG_MAP[language];
// //   if (!config) {
// //     return res.status(400).json({ message: "Unsupported language" });
// //   }

// //   const piston = await axios.post(
// //     "https://emkc.org/api/v2/piston/execute",
// //     {
// //       language: config.lang,
// //       version: config.version,
// //       files: [{ name: config.file, content: code }],
// //       stdin: input || "",
// //     }
// //   );

// //   const output =
// //     (piston.data.run.stdout || "") +
// //     (piston.data.run.stderr || "");

// //   res.json({ output: output.trim() });
// // }


// // /* ================= GET CURRENT LEVEL ================= */
// // export async function getLevel(req, res) {
// //   const { userId } = req.params;

// //   const [rows] = await db.query(
// //     "SELECT current_level FROM user_progress WHERE user_id=?",
// //     [userId]
// //   );

// //   let currentLevel = 1;

// //   if (rows.length === 0) {
// //     await db.query(
// //       "INSERT INTO user_progress (user_id, current_level) VALUES (?,1)",
// //       [userId]
// //     );
// //   } else {
// //     currentLevel = rows[0].current_level;
// //   }

// //   const [levels] = await db.query(
// //     "SELECT level_no, title, description FROM levels WHERE level_no=?",
// //     [currentLevel]
// //   );

// //   res.json({ level: levels[0] });
// // }

// // /* ================= SUBMIT CODE ================= */
// // export async function submitCode(req, res) {
// //   const { userId, code, language } = req.body;

// //   const config = LANG_MAP[language];
// //   if (!config) {
// //     return res.json({ verdict: "Unsupported language ❌" });
// //   }

// //   const [[progress]] = await db.query(
// //     "SELECT current_level FROM user_progress WHERE user_id=?",
// //     [userId]
// //   );

// //   const levelNo = progress.current_level;

// //   const [tests] = await db.query(
// //     "SELECT input_data, expected_output FROM test_cases WHERE level_no=?",
// //     [levelNo]
// //   );

// //   for (let i = 0; i < tests.length; i++) {
// //     const test = tests[i];

// //     const out = await axios.post(
// //       "https://emkc.org/api/v2/piston/execute",
// //       {
// //         language: config.lang,
// //         version: config.version,
// //         files: [{ name: config.file, content: code }],
// //         stdin: test.input_data,
// //       }
// //     );

// //     const userOutput =
// //       ((out.data.run.stdout || "") +
// //         (out.data.run.stderr || "")).trim();

// //     // if (userOutput !== test.expected_output.trim()) {
// //     //   return res.json({
// //     //     verdict: "❌ Wrong Answer",
// //     //     failed_test: i + 1,
// //     //   });
// //     // }
// //     const normalize = (s) =>
// //   s.replace(/\r/g, "").trim();

// // if (normalize(userOutput) !== normalize(test.expected_output)) {
// //    return res.json({
// //         verdict: "❌ Wrong Answer",
// //         failed_test: i + 1,
// //        });

// //   }

// //   await db.query(
// //     "UPDATE user_progress SET current_level = current_level + 1 WHERE user_id=?",
// //     [userId]
// //   );

// //   res.json({ verdict: "✅ Accepted" });
// // }
// // };

























// import db from "../db.js";
// import axios from "axios";

// const LANG_MAP = {
//   python: { lang: "python", version: "3.10.0", file: "main.py" },
//   javascript: { lang: "javascript", version: "18.15.0", file: "main.js" },
//   c: { lang: "c", version: "10.2.0", file: "main.c" },
//   cpp: { lang: "cpp", version: "10.2.0", file: "main.cpp" },
// };

// /* ================= GET LEVELS ================= */
// export async function getLevels(req, res) {
//   const { userId } = req.params;

//   const [[progress]] = await db.query(
//     "SELECT current_level FROM user_progress WHERE user_id=?",
//     [userId]
//   );

//   const currentLevel = progress ? progress.current_level : 1;

//   const [levels] = await db.query(
//     "SELECT level_no, title FROM levels ORDER BY level_no"
//   );

//   res.json({ currentLevel, levels });
// }

// /* ================= GET CURRENT LEVEL + SAMPLE ================= */
// export async function getLevel(req, res) {
//   const { userId } = req.params;

//   const [[progress]] = await db.query(
//     "SELECT current_level FROM user_progress WHERE user_id=?",
//     [userId]
//   );

//   let currentLevel = 1;

//   if (!progress) {
//     await db.query(
//       "INSERT INTO user_progress (user_id, current_level) VALUES (?,1)",
//       [userId]
//     );
//   } else {
//     currentLevel = progress.current_level;
//   }

//   const [[level]] = await db.query(
//     "SELECT level_no, title, description, youtube_link FROM levels WHERE level_no=?",
//     [currentLevel]
//   );

//   const [[sampleTest]] = await db.query(
//     "SELECT input_data, expected_output FROM test_cases WHERE level_no=? ORDER BY id ASC LIMIT 1",
//     [currentLevel]
//   );

//   res.json({ level, sampleTest });
// }

// /* ================= RUN CODE ================= */
// export async function runCode(req, res) {
//   const { code, language, input } = req.body;
//   const config = LANG_MAP[language];

//   if (!config) return res.status(400).json({ output: "Unsupported language" });

//   const piston = await axios.post(
//     "https://emkc.org/api/v2/piston/execute",
//     {
//       language: config.lang,
//       version: config.version,
//       files: [{ name: config.file, content: code }],
//       stdin: input || "",
//     }
//   );

//   const output =
//     (piston.data.run.stdout || "") +
//     (piston.data.run.stderr || "");

//   res.json({ output: output.trim() });
// }

// /* ================= SUBMIT CODE ================= */
// export async function submitCode(req, res) {
//   const { userId, code, language } = req.body;
//   const config = LANG_MAP[language];

//   if (!config) return res.json({ verdict: "Unsupported ❌" });

//   const [[progress]] = await db.query(
//     "SELECT current_level FROM user_progress WHERE user_id=?",
//     [userId]
//   );

//   const levelNo = progress.current_level;

//   const [tests] = await db.query(
//     "SELECT input_data, expected_output FROM test_cases WHERE level_no=?",
//     [levelNo]
//   );

//   const normalize = (s) => s.replace(/\r/g, "").trim();

//   for (let i = 0; i < tests.length; i++) {
//     const out = await axios.post(
//       "https://emkc.org/api/v2/piston/execute",
//       {
//         language: config.lang,
//         version: config.version,
//         files: [{ name: config.file, content: code }],
//         stdin: tests[i].input_data,
//       }
//     );

//     const userOutput = normalize(
//       (out.data.run.stdout || "") +
//       (out.data.run.stderr || "")
//     );

//     if (userOutput !== normalize(tests[i].expected_output)) {
//       return res.json({
//         verdict: "❌ Wrong Answer",
//         failed_test: i + 1,
//       });
//     }
//   }

//   await db.query(
//     "UPDATE user_progress SET current_level = current_level + 1 WHERE user_id=?",
//     [userId]
//   );

//   res.json({ verdict: "✅ Accepted" });
// }


import db from "../db.js";
import axios from "axios";

const LANG_MAP = {
  python: { lang: "python", version: "3.10.0", file: "main.py" },
  javascript: { lang: "javascript", version: "18.15.0", file: "main.js" },
  c: { lang: "c", version: "10.2.0", file: "main.c" },
  cpp: { lang: "cpp", version: "10.2.0", file: "main.cpp" },
};

/* ================= GET LEVELS ================= */
export async function getLevels(req, res) {
  try {
    const { userId } = req.params;

    const [[progress]] = await db.query(
      "SELECT current_level FROM user_progress WHERE user_id=?",
      [userId]
    );

    const currentLevel = progress ? progress.current_level : 1;

    const [levels] = await db.query(
      "SELECT level_no, title FROM levels ORDER BY level_no"
    );

    res.json({ currentLevel, levels });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

/* ================= GET CURRENT LEVEL ================= */
export async function getLevel(req, res) {
  try {
    const { userId } = req.params;

    const [[progress]] = await db.query(
      "SELECT current_level FROM user_progress WHERE user_id=?",
      [userId]
    );

    let currentLevel = 1;

    if (!progress) {
      await db.query(
        "INSERT INTO user_progress (user_id, current_level) VALUES (?,1)",
        [userId]
      );
    } else {
      currentLevel = progress.current_level;
    }

    // 🔹 level data
    const [[level]] = await db.query(
      "SELECT id, level_no, title, description, youtube_link FROM levels WHERE level_no=?",
      [currentLevel]
    );

    if (!level) {
      return res.status(404).json({ message: "Level not found" });
    }

    // 🔹 sample test (IMPORTANT FIX: level_id)
    const [[sampleTest]] = await db.query(
      "SELECT input_data, expected_output FROM test_cases WHERE level_id=? LIMIT 1",
      [level.id]
    );

    res.json({ level, sampleTest });
  } catch (err) {
    console.error("GET LEVEL ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
}

/* ================= RUN CODE ================= */
export async function runCode(req, res) {
  const { code, language, input } = req.body;
  const config = LANG_MAP[language];

  if (!config) {
    return res.status(400).json({ output: "Unsupported language" });
  }

  const piston = await axios.post(
    "https://emkc.org/api/v2/piston/execute",
    {
      language: config.lang,
      version: config.version,
      files: [{ name: config.file, content: code }],
      stdin: input || "",
    }
  );

  const output =
    (piston.data.run.stdout || "") +
    (piston.data.run.stderr || "");

  res.json({ output: output.trim() });
}

/* ================= SUBMIT CODE ================= */
export async function submitCode(req, res) {
  try {
    const { userId, code, language } = req.body;
    const config = LANG_MAP[language];

    if (!config) {
      return res.json({ verdict: "Unsupported ❌" });
    }

    const [[progress]] = await db.query(
      "SELECT current_level FROM user_progress WHERE user_id=?",
      [userId]
    );

    const levelNo = progress.current_level;

    const [[level]] = await db.query(
      "SELECT id FROM levels WHERE level_no=?",
      [levelNo]
    );

    const [tests] = await db.query(
      "SELECT input_data, expected_output FROM test_cases WHERE level_id=?",
      [level.id]
    );

    const normalize = (s) => s.replace(/\r/g, "").trim();

    for (let i = 0; i < tests.length; i++) {
      const out = await axios.post(
        "https://emkc.org/api/v2/piston/execute",
        {
          language: config.lang,
          version: config.version,
          files: [{ name: config.file, content: code }],
          stdin: tests[i].input_data,
        }
      );

      const userOutput = normalize(
        (out.data.run.stdout || "") +
        (out.data.run.stderr || "")
      );

      if (userOutput !== normalize(tests[i].expected_output)) {
        return res.json({
          verdict: "❌ Wrong Answer",
          failed_test: i + 1,
        });
      }
    }

    await db.query(
      "UPDATE user_progress SET current_level = current_level + 1 WHERE user_id=?",
      [userId]
    );

    res.json({ verdict: "✅ Accepted" });
  } catch (err) {
    console.error("SUBMIT ERROR:", err);
    res.status(500).json({ verdict: "Server error" });
  }
}
