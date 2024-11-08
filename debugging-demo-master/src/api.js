const app = express();
app.use('/assets', express.static(path.resolve(`${__dirname}/../client/`)));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(favicon(`${__dirname}/../client/img/favicon.png`));
router(app);

app.listen(port, (err) => {
  if(err){
    throw err;
  }
  console.log(`Listening on port ${port}`);
});