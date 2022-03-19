
let matrix =
      [
            [1, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [1, 0, 0, 1, 1, 1, 0, 0],
            [1, 0, 0, 0, 0, 1, 0, 0],
            [1, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 0, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 1, 1, 1],
            [1, 0, 0, 0, 1, 0, 0, 1]
      ];

const direction =
{
      top: 0, bottom: 1, left: 2, right: 3, non: 4
}

function start(n)
{
      let x = 0,
            y = 0;
      let started = true;
      let newmat = [];
      for (let i = 0; i < n + 1; i++)
      {
            let temparray = [];
            for (let x = 0; x < n + 1; x++)
            {
                  temparray[x] = 0;
            }
            newmat[i] = temparray;
      }
      while ((x > 0 || y > 0) || started == true) 
      {
            started = false;
            //top border
            if (x < n && y == 0) 
            {
                  check(x, y, newmat, n, direction.bottom);
                  x++;
            }
            //right border
            else if (x == n && y < n) 
            {
                  check(x, y, newmat, n, direction.left);
                  y++;
            }
            //bottom border
            else if (y == n && x > 0)
            {
                  check(x, y, newmat, n, direction.top);
                  x--;
            }
            //left border
            else if (x == 0)
            {
                  check(x, y, newmat, n, direction.right);
                  y--;
            }
      }
      console.log("end");
      newmat.map((el) =>
      {
            el.map((e, i) =>
            {
                  if (i == n)
                  {
                        process.stdout.write(e + " " + "\n");
                  } else
                  {
                        process.stdout.write(e + " ");
                  }
            });
      });

}

function recursive(u, v, newmat, n, lastdir)
{
      if (u >= 0 && u <= n)
      {
            //top
            if (v - 1 >= 0 && lastdir != direction.bottom)
            {
                  if (matrix[v - 1][u] == 1 && !isInMatrix(u, v - 1, newmat))
                  {
                        newmat[v - 1][u] = 1;
                        recursive(u, v - 1, newmat, n, direction.top);
                  }
            }
            //bottom
            if (v + 1 <= n && lastdir != direction.top)
            {
                  if (matrix[v + 1][u] == 1 && !isInMatrix(u, v + 1, newmat))
                  {
                        newmat[v + 1][u] = 1;
                        recursive(u, v + 1, newmat, n, direction.bottom);
                  }
            }
      }
      if (v >= 0 && v <= n)
      {
            //right
            if (u + 1 <= n && lastdir != direction.left)
            {
                  if (matrix[v][u + 1] == 1 && !isInMatrix(u + 1, v, newmat))
                  {
                        newmat[v][u + 1] = 1;
                        recursive(u + 1, v, newmat, n, direction.right);
                  }
            }
            //left
            if (u - 1 >= 0 && lastdir != direction.right)
            {
                  if (matrix[v][u - 1] == 1 && !isInMatrix(u - 1, v, newmat))
                  {
                        newmat[v][u - 1] = 1;
                        recursive(u - 1, v, newmat, n, direction.left);
                  }
            }
      }
}

function check(x, y, newmat, n, lastdir)
{
      lastdir = 5;
      if (matrix[y][x] == 1)
      {
            newmat[y][x] = 1;
            recursive(x, y, newmat, n, lastdir);
      }
}
function isInMatrix(x, y, newmat)
{
      if (newmat[y][x] == 1)
      {
            return true;
      }
      return false;
}
start(7);



















































