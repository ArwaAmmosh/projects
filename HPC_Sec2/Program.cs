using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;
namespace HPC_Sec2
{
    class program
    {
        public static void Main(string[] args)
        {
            Calculator calculator = new Calculator();
            //parrallel
            Task x2 = new Task(delegate () { calculator.Subtract( 2, 3); });
            Task x1 = new Task(delegate () { calculator.Add(1, 3); 
            Task.Run(() => x2);
            });
            Console.WriteLine(x1.Status);
            Task x3 = new Task(delegate () { calculator.Multiply(3, 4); });
            Task x4 = new Task(delegate () { calculator.Divide(4, 5); });
            x1.Start();
            x2.Start();
            Task.Run(() => x1) ;
            Console.WriteLine(x1.Status);
            Console.WriteLine(x1.Status);
            Console.WriteLine(x2.Status);


        }
    } }