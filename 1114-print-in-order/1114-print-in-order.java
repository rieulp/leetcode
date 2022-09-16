import java.util.concurrent.CountDownLatch;

class Foo {
  private CountDownLatch L1;
  private CountDownLatch L2;

  public Foo() {
    L1 = new CountDownLatch(1);
    L2 = new CountDownLatch(1);
  }

  public void first(Runnable printFirst) throws InterruptedException {
    // printFirst.run() outputs "first". Do not change or remove this line.
    printFirst.run();
    L1.countDown();
  }

  public void second(Runnable printSecond) throws InterruptedException {
    L1.await();
    // printSecond.run() outputs "second". Do not change or remove this line.
    printSecond.run();
    L2.countDown();
  }

  public void third(Runnable printThird) throws InterruptedException {
    L2.await();
    // printThird.run() outputs "third". Do not change or remove this line.
    printThird.run();
  }
}